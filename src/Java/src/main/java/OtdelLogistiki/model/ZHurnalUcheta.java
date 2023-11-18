package OtdelLogistiki.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import OtdelLogistiki.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЖурналУчета
 */
@Entity(name = "IISOtdelLogistikiЖурналУчета")
@Table(schema = "public", name = "ЖурналУчета")
public class ZHurnalUcheta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Пробег")
    private Double пробег;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ВремяВыезда")
    private Date времявыезда;

    @Column(name = "ПоказСпидом")
    private Double показспидом;

    @Column(name = "ВремяВозвр")
    private Date времявозвр;

    @Column(name = "Примечания")
    private String примечания;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RukOtdLog")
    @Convert("RukOtdLog")
    @Column(name = "РукОтдЛог", length = 16, unique = true, nullable = false)
    private UUID _rukotdlogid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RukOtdLog", insertable = false, updatable = false)
    private RukOtdLog rukotdlog;


    public ZHurnalUcheta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getПробег() {
      return пробег;
    }

    public void setПробег(Double пробег) {
      this.пробег = пробег;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Date getВремяВыезда() {
      return времявыезда;
    }

    public void setВремяВыезда(Date времявыезда) {
      this.времявыезда = времявыезда;
    }

    public Double getПоказСпидом() {
      return показспидом;
    }

    public void setПоказСпидом(Double показспидом) {
      this.показспидом = показспидом;
    }

    public Date getВремяВозвр() {
      return времявозвр;
    }

    public void setВремяВозвр(Date времявозвр) {
      this.времявозвр = времявозвр;
    }

    public String getПримечания() {
      return примечания;
    }

    public void setПримечания(String примечания) {
      this.примечания = примечания;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}