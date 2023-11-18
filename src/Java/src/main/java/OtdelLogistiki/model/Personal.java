package OtdelLogistiki.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import OtdelLogistiki.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Персонал
 */
@Entity(name = "IISOtdelLogistikiПерсонал")
@Table(schema = "public", name = "Персонал")
public class Personal {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Контакты")
    private String контакты;

    @Column(name = "ФИО")
    private String фио;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RukOtdLog")
    @Convert("RukOtdLog")
    @Column(name = "РукОтдЛог", length = 16, unique = true, nullable = false)
    private UUID _rukotdlogid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RukOtdLog", insertable = false, updatable = false)
    private RukOtdLog rukotdlog;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TCHVoditel")
    @Convert("TCHVoditel")
    @Column(name = "ТЧВодитель", length = 16, unique = true, nullable = false)
    private UUID _tchvoditelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TCHVoditel", insertable = false, updatable = false)
    private TCHVoditel tchvoditel;


    public Personal() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКонтакты() {
      return контакты;
    }

    public void setКонтакты(String контакты) {
      this.контакты = контакты;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }


}